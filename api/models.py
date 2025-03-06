from typing import List
from dataclasses import dataclass

@dataclass
class Question:
    id: int
    question_text: str
    choices: List[str]
    correct_answer_index: int
    explanation: str
    category: str = "General"
    difficulty: str = "Medium"

    def is_correct(self, answer_index: int) -> bool:
        """Check if the provided answer index is correct."""
        return answer_index == self.correct_answer_index

    def to_dict(self) -> dict:
        """Convert the question to a dictionary format."""
        return {
            "id": self.id,
            "question": self.question_text,
            "choices": self.choices,
            "category": self.category,
            "difficulty": self.difficulty,
            "explanation": self.explanation
        }

@dataclass
class QuestionSet:
    id: int
    name: str
    description: str
    questions: List[Question]
    difficulty: str = "Mixed"
    category: str = "Mixed"

    def get_question_count(self) -> int:
        """Return the number of questions in the set."""
        return len(self.questions)

    def to_dict(self) -> dict:
        """Convert the question set to a dictionary format."""
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "question_count": self.get_question_count(),
            "difficulty": self.difficulty,
            "category": self.category
        }