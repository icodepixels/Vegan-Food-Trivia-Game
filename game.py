from typing import Optional
from models import Question, QuestionSet
import random

class TriviaGame:
    def __init__(self, question_set: QuestionSet):
        self.question_set = question_set
        self.questions = question_set.questions.copy()  # Create a copy to preserve original order
        self.current_question_index = 0
        self.score = 0
        self.total_questions = len(self.questions)
        random.shuffle(self.questions)  # Randomize question order

    def get_current_question(self) -> Optional[Question]:
        """Get the current question or None if game is finished."""
        if self.current_question_index >= self.total_questions:
            return None
        return self.questions[self.current_question_index]

    def submit_answer(self, answer_index: int) -> bool:
        """Submit an answer for the current question and return whether it was correct."""
        current_question = self.get_current_question()
        if not current_question:
            raise ValueError("Game is finished")

        is_correct = current_question.is_correct(answer_index)
        if is_correct:
            self.score += 1

        self.current_question_index += 1
        return is_correct

    def get_score(self) -> tuple[int, int]:
        """Return current score and total questions as a tuple."""
        return (self.score, self.total_questions)

    def is_finished(self) -> bool:
        """Check if the game is finished."""
        return self.current_question_index >= self.total_questions

    def get_progress(self) -> float:
        """Return progress as a percentage."""
        return (self.current_question_index / self.total_questions) * 100

    def get_set_info(self) -> dict:
        """Return information about the current question set."""
        return self.question_set.to_dict()