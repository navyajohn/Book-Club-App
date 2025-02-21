// BookClubLoginSignup.js
import React, { useState } from 'react';
import './BookClubLoginSignup.css'; // Import CSS for styling

const BookClubLoginSignup = () => {
    const [isLogin, setIsLogin] = useState(true);

    const showSignupForm = () => setIsLogin(false);
    const showLoginForm = () => setIsLogin(true);

    return (
        <div className="container">
            <h2>{isLogin ? "Welcome Back, Book Lover!" : "Join Our Book Realm"}</h2>

            {isLogin ? (
                <form>
                    <input type="text" placeholder="Username" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Enter the Book Realm</button>
                    <p className="toggle" onClick={showSignupForm}>New to the club? Join us!</p>
                </form>
            ) : (
                <form>
                    <input type="text" placeholder="Preferred Username" required />
                    <input type="text" placeholder="Full Name" required />
                    <input type="tel" placeholder="Phone Number" required />
                    <input type="email" placeholder="Email Address" required />
                    <input type="password" placeholder="Create Password" required />
                    <input type="password" placeholder="Confirm Password" required />
                    <button type="submit">Join the Book Club</button>
                    <p className="toggle" onClick={showLoginForm}>Already a member? Return to login.</p>
                </form>
            )}
        </div>
    );
};

export default BookClubLoginSignup;
