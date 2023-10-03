import React from 'react'

export default function Notification({notifs, isSuccess}) {
    if(notifs.length){
        return (
            isSuccess ?
                <div className="font-medium text-sm text-green-600 mb-4">
                    {notifs}
                </div>
            :

            <div className="mb-4">
                <div className="font-medium text-red-600">
                     Whoops! Terjadi kesalahan.
                </div>
                <ul className="mt-3 list-disc list-inside text-sm text-red-600">
                    {notifs.map((notif,index) => (
                        <li key={index}>{notif}</li>
                    ))}
                 </ul>
             </div>
        )
    }
}
