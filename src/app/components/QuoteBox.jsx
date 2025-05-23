import React, { useState } from "react";

const quotes = [
    {
        text: "The true measure of success is not what you achieve, but how many lives you inspire.",
        author: "Akram",
    },
    {
        text: "Simplicity is the soul of clarity. In a complex world, be clear.",
        author: "Alvin",
    },
    {
        text: "Don’t wait for the perfect moment. Take the moment and make it perfect.",
        author: "Gofur",
    },
    {
        text: "Growth begins when you step out of your comfort zone.",
        author: "Daffa",
    },
    {
        text: "Creativity is intelligence having fun. Never stop imagining.",
        author: "Mitchel",
    },
];

const colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
];

const QuoteBox = () => {
    const [index, setIndex] = useState(0);
    const [colorIndex, setColorIndex] = useState(0);

    const handleNewQuote = () => {
        let newIndex = Math.floor(Math.random() * quotes.length);
        while (newIndex === index) {
            newIndex = Math.floor(Math.random() * quotes.length);
        }
        setIndex(newIndex);

        let newColorIndex = Math.floor(Math.random() * colors.length);
        while (newColorIndex === colorIndex) {
            newColorIndex = Math.floor(Math.random() * colors.length);
        }
        setColorIndex(newColorIndex);
    };

    const currentQuote = quotes[index];
    const currentColor = colors[colorIndex];

    const tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        `"${currentQuote.text}" — ${currentQuote.author}`
    )}`;

    return (
        <div
            id="quote-box"
            style={{
                backgroundColor: currentColor,
                color: currentColor,
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "1rem",
                transition: "background-color 1s ease, color 1s ease",
            }}
        >
            <div
                style={{
                    backgroundColor: "white",
                    color: currentColor,
                    padding: "2rem",
                    borderRadius: "5px",
                    maxWidth: "600px",
                    width: "100%",
                    transition: "color 1s ease",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                <div style={{ textAlign: "center" }}>
                    <h2 id="text">“{currentQuote.text}”</h2>
                    <p id="author">- {currentQuote.author}</p>
                </div>

                <div
                    style={{
                        marginTop: "2rem",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <div>
                        <a
                            id="linkedin-share"
                            href="https://www.linkedin.com/in/naufal-akramziyad-p-h-026892366/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                backgroundColor: currentColor,
                                color: "white",
                                padding: "10px 12px",
                                borderRadius: "4px",
                                marginRight: "8px",
                                textDecoration: "none",
                            }}
                            aria-label="LinkedIn Profile"
                            title="LinkedIn Profile"
                        >
                            <i className="fab fa-linkedin-in"></i>
                        </a>

                        <a
                            id="tweet-quote"
                            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                                `"${currentQuote.text}" — ${currentQuote.author}`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                backgroundColor: currentColor,
                                color: "white",
                                padding: "10px 12px",
                                borderRadius: "4px",
                                textDecoration: "none",
                            }}
                            aria-label="Tweet this quote"
                            title="Tweet"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>

                    <button
                        id="new-quote"
                        onClick={handleNewQuote}
                        style={{
                            backgroundColor: currentColor,
                            color: "white",
                            border: "none",
                            padding: "10px 20px",
                            cursor: "pointer",
                            borderRadius: "4px",
                            fontWeight: "bold",
                            transition: "background-color 1s ease",
                        }}
                    >
                        New quote
                    </button>
                </div>


            </div>

            <p style={{ color: "white", marginTop: "1rem", fontSize: "0.9rem" }}>
                by Naufal Akramziyad P.H
            </p>
        </div>
    );
};

export default QuoteBox;
