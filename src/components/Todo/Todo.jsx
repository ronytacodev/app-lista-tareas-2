import React from 'react';

const Todo = ({ todo, handleSetComplete, handleDelete }) => {

    const { id, title, completed } = todo;

    return (
        <div
            className="flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600 "
        >
            <div className="flex items-center">
                {
                    completed ? (
                        <div onClick={() => handleSetComplete(id)} className="border border-gray-500 border-solid p-1 bg-green-700 rounded-full cursor-pointer">
                            {/* <img
                                className="h-4 w-4 " src="./check-icon.svg" alt="Check Icon"
                            /> */}
                            <span className="cursor-pointer transition-all duration-300 ease-in">
                                ✔
                            </span>
                        </div>
                    )
                        : (
                            // <span onClick={() => handleSetComplete(id)} className={`border border-gray-500 border-solid p-3 rounded-full cursor-pointer`}>
                            // </span>
                            <span onClick={() => handleSetComplete(id)} className="border border-gray-500 border-solid p-3 rounded-full cursor-pointer">
                            </span>
                        )
                }
                <p className={"pl-3 " + (completed && "line-through")}>{title}</p>
            </div>

            {/* <img onClick={() => handleDelete(id)} className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in" src="/check-icon.svg" alt="Close Icon" /> */}
            <div className="flex items-center border border-purple-400 border-solid p-2 rounded-full cursor-pointer">
                <span onClick={() => handleDelete(id)} className="cursor-pointer transition-all duration-300 ease-in">
                    x
                </span>
            </div>
        </div>
    );
}

export { Todo } 
