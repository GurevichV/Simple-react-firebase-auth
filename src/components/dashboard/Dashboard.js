import { useUserAuth } from "../../context/UserAuthContext";
import { Button } from "react-bootstrap";


const Dashboard = () => {
    const { user, logOut } = useUserAuth();
    const handleLogOut = async () => {
        try {
            await logOut();
        }
        catch (err) {
            console.log(err.massege)
        }
    }
    return (
        <>
            <h1>Dashboard</h1>
            <h2>Hello Welcome <br />
                {user && user.email}</h2>
            <Button variant="primary" onClick={handleLogOut}>Log out</Button>
        </>
    )
}

export default Dashboard;