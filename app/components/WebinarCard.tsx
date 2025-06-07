import React from 'react'

export interface Webinar {
    id: number
    title: string
    speaker: string
    date: string
}

interface Props {
    webinar: Webinar
    onViewDetails: (id: number) => void
}

const WebinarCard: React.FC<Props> = ({ webinar, onViewDetails }) => {
    // Format the date to a more readable format e.g. "July 10, 2025"
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    }).format(new Date(webinar.date))

    return (
        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
                <h2 className="text-xl font-semibold text-gray-800">
                    {webinar.title}
                </h2>
                <p className="mt-1 text-gray-600">
                    Speaker: <span className="font-medium">{webinar.speaker}</span>
                </p>
                <p className="mt-1 text-gray-600">
                    Date: <span className="font-medium">{formattedDate}</span>
                </p>
            </div>
            <button
                onClick={() => onViewDetails(webinar.id)}
                className="mt-4 sm:mt-0 inline-block px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
            >
                View Details
            </button>
        </div>
    )
}

export default WebinarCard
