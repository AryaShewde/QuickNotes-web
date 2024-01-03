import React from 'react'

const Header = ({ handleChangeMode }) => {
    return (
        <div className='header'>
            <h1>QuickNotes</h1>
            <button
                onClick={() =>
                    handleChangeMode(
                        (previousMode) => !previousMode
                    )
                }
                className='save'
            >Change Mode</button>
        </div>
    )
}

export default Header
