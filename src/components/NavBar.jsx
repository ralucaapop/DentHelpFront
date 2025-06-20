import styles from '../assets/css/NavBar.module.css';
import {isTokenValid, parseJwt} from "../service/authService.jsx";
import {useNavigate} from "react-router-dom";


const Navbar = () => {

    const navigate = useNavigate();
    const isAuthenticated = () => {
        const token = localStorage.getItem('token');
        return token && isTokenValid(token);
    };

    const goToHomeSection = (sectionId) => {
        navigate(`/#${sectionId}`);
    };

    const handleRedirectLogin = ()=>{
        navigate("/Login");

    }

    return (
        <nav className={styles["navbar"]}>
            <div className={styles["navLinks"]}>
                {isAuthenticated() ? (
                    <>
                        <button onClick={() => goToHomeSection("options-section")} className={styles["menu-btn"]}>Meniu</button>
                    </>
                ) : (

                        <button onClick={handleRedirectLogin} className={styles["history"]}>Autentificare</button>

                )}
                <button onClick={() => goToHomeSection('history')} className={styles["history"]}>Despre noi</button>
                <button onClick={() => goToHomeSection('contact')} className={styles["contact"]}>Contact</button>
            </div>
        </nav>
    );

};

export default Navbar;
