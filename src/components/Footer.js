import React from 'react'

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>Made with ❤️ by Faizan. All rights reserved &copy; {year}</p>
        </footer>
    )
}
