from game import TriviaGame
from questions_db import get_question_sets, get_question_set, get_sets_by_category

def get_unique_categories() -> list[str]:
    """Get a list of unique categories from all question sets."""
    return sorted(list(set(qs.category for qs in get_question_sets())))

def display_categories():
    """Display available categories and return user's choice."""
    categories = get_unique_categories()
    print("\nAvailable Categories:")
    print("=" * 50)

    for i, category in enumerate(categories, 1):
        print(f"\n{i}. {category}")

    while True:
        try:
            choice = int(input("\nSelect a category (enter the number): "))
            if 1 <= choice <= len(categories):
                return categories[choice - 1]
            print(f"Please enter a number between 1 and {len(categories)}")
        except ValueError:
            print("Please enter a valid number")

def display_question_sets(category: str):
    """Display available question sets for a category and return user's choice."""
    question_sets = get_sets_by_category(category)
    print(f"\n{category} Question Sets:")
    print("=" * 50)

    for question_set in question_sets:
        info = question_set.to_dict()
        print(f"\n{info['id']}. {info['name']}")
        print(f"   Description: {info['description']}")
        print(f"   Difficulty: {info['difficulty']}")
        print(f"   Questions: {info['question_count']}")

    while True:
        try:
            choice = int(input("\nSelect a question set (enter the number): "))
            selected_set = get_question_set(choice)
            if selected_set.category == category:
                return selected_set
            print("Please select a valid question set from this category")
        except (ValueError, IndexError):
            print("Please enter a valid question set number")

def main():
    # Welcome message
    print("Welcome to the Trivia Game!")

    # Let user choose a category
    selected_category = display_categories()

    # Let user choose a question set within the category
    selected_set = display_question_sets(selected_category)

    # Initialize the game with selected question set
    game = TriviaGame(selected_set)

    print(f"\nStarting '{selected_set.name}'!")
    print(selected_set.description)
    input("Press Enter to begin...")

    # Main game loop
    while not game.is_finished():
        current_question = game.get_current_question()

        # Display the current question
        print("\n" + "="*50)
        print(f"Question {game.current_question_index + 1} of {game.total_questions}")
        print(f"Category: {current_question.category}")
        print(f"Difficulty: {current_question.difficulty}")
        print("\n" + current_question.question_text)

        # Display choices
        for i, choice in enumerate(current_question.choices):
            print(f"{i + 1}. {choice}")

        # Get player's answer
        while True:
            try:
                answer = int(input("\nEnter your answer (1-4): ")) - 1
                if 0 <= answer < len(current_question.choices):
                    break
                print("Please enter a number between 1 and 4")
            except ValueError:
                print("Please enter a valid number")

        # Submit answer and show result
        is_correct = game.submit_answer(answer)
        print("Correct!" if is_correct else "Wrong!")

        # Show current score
        score, total = game.get_score()
        print(f"\nCurrent Score: {score}/{total}")
        print(f"Progress: {game.get_progress():.1f}%")

    # Game finished - show final score
    print("\n" + "="*50)
    print("Game Over!")
    score, total = game.get_score()
    print(f"Final Score: {score}/{total} ({(score/total)*100:.1f}%)")

if __name__ == "__main__":
    main()
