import { createContext, useState } from "react";
import PropTypes from "prop-types";

const UserContext = createContext();

export function UserProvider({children}) {

    const [user, setUser] = useState(null);

    const login = (name) => setUser({name});
    const logout = () => setUser(null);

    return(
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
    );
}

UserProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default UserContext;