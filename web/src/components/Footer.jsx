// import React from 'react'

// function Footer() {
//   return (
//     <div>
//       <footer>
//         <p>@kim 2024 | Crafted with <span class="love-emoji">❤️</span> | Have a good <span id="dayOfWeek"></span></p>

//         <script>
//             // JavaScript to get and display the current day of the week
//             const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//             const today = new Date();
//             const dayOfWeek = daysOfWeek[today.getDay()];

//             document.getElementById('dayOfWeek').textContent = dayOfWeek;
//         </script>
//     </footer>

//     </div>
//   )
// }

// export default Footer
import React from 'react';

const Footer = () => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const dayOfWeek = daysOfWeek[today.getDay()];

    return (
        <footer style={{
            textAlign: 'center',
            backgroundColor: '#333',
            color: 'white',
            padding: '7px',
            position: 'fixed',
            bottom: '0',
            width: '100%',
        }}>
            <p>@kim 2024 | Crafted with <span style={{ fontSize: '20px', margin: '0 5px' }}>❤️  by Shaddy</span> | Have a good {dayOfWeek}</p>
        </footer>
    );
};

export default Footer;
