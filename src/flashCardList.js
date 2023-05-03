import React from 'react'
import Flashcard from './flashCard';

const FlashCardList = ({ flashcards }) => {
    return (
        <div className="card-grid">
            {flashcards.map(flashcard => {
                return (
                    <div className="container">
                        <Flashcard flashcard={flashcard} key={flashcard.id} />
                    </div>
                )
            })}
        </div>
    )
}
export default FlashCardList;
