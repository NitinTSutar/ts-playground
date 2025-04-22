import Button from "./Components/Button";
import User from "./Components/User";

const App = () => {
    return (
        <div>
            <User name="Nitin" age={24} isStudent={true} />
            <Button
                label="Click"
                onClick={() => alert('Button Clicked')}
                disabled={false}
            />
        </div>
    );
};

export default App;
