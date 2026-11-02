
import { useState } from "react";
import "./counter.css";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="counter-card">
            <span className="counter-label">REACT PROJECT 01</span>

            <h1>Counter App</h1>
            <p className="counter-description">
                Manage your number with ease.
            </p>

            <div className="counter-display">
                {count}
            </div>

            <div className="counter-actions">
                <button
                    className="counter-btn decrease"
                    onClick={() => setCount(count - 1)}
                    disabled={count === 0}
                >
                    −
                </button>

                <button
                    className="counter-btn reset"
                    onClick={() => setCount(0)}
                >
                    Reset
                </button>

                <button
                    className="counter-btn increase"
                    onClick={() => setCount(count + 1)}
                >
                    +
                </button>
            </div>

            <p className="counter-footer">
                Built with React & JavaScript
            </p>
        </div>
    );
}

export default Counter;
