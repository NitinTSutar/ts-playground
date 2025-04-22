import AdminInfo from "./Components/AdminInfo";
import Button from "./Components/Button";
import Counter from "./Components/Counter";
import TodoList from "./Components/TodoList";
import User from "./Components/User";
import UserInfo from "./Components/UserInfo";
import { Info, AdminInfoList } from "./types";

const App = () => {

    const user: Info = {
        id: 1,
        name: "Nitin Sutar",
        email: "nitin@gmail.com"
    }

    const admin: AdminInfoList = {
        id: 2,
        name: "Admin Bhai",
        email: "adminbhai@gmail.com",
        role: "admin",
        lastLogin: new Date(),  
    }

    return (
        <div>
            <User name="Nitin" age={24} isStudent={true} />
            <Button
                label="Click"
                onClick={() => alert('Button Clicked')}
                disabled={false}
            />
            <UserInfo user={user} />
            <AdminInfo admin={admin} />
            <Counter />
            <TodoList />
        </div>
    );
};

export default App;
