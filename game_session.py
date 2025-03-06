from typing import Dict, Optional
import uuid
from game import TriviaGame
from models import QuestionSet
from questions_db import get_question_set

class GameSession:
    def __init__(self, question_set: QuestionSet):
        self.game_id = str(uuid.uuid4())
        self.game = TriviaGame(question_set)
        self.current_question = self.game.get_current_question()

    def submit_answer(self, answer_index: int) -> bool:
        return self.game.submit_answer(answer_index)

    def get_state(self) -> dict:
        score, total = self.game.get_score()
        return {
            "game_id": self.game_id,
            "current_question_index": self.game.current_question_index,
            "total_questions": self.game.total_questions,
            "score": score,
            "completed": self.game.is_finished(),
            "progress": self.game.get_progress()
        }

    def get_current_question(self):
        return self.game.get_current_question()

class GameSessionManager:
    def __init__(self):
        self.active_sessions: Dict[str, GameSession] = {}

    def create_game(self, question_set_id: int) -> GameSession:
        question_set = get_question_set(question_set_id)
        session = GameSession(question_set)
        self.active_sessions[session.game_id] = session
        return session

    def get_session(self, game_id: str) -> Optional[GameSession]:
        return self.active_sessions.get(game_id)

    def end_session(self, game_id: str):
        if game_id in self.active_sessions:
            del self.active_sessions[game_id]

    def cleanup_completed_games(self):
        """Remove completed games that are older than a certain threshold"""
        completed_games = [
            game_id for game_id, session in self.active_sessions.items()
            if session.game.is_finished()
        ]
        for game_id in completed_games:
            self.end_session(game_id)