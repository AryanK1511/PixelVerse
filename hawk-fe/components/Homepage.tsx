
import { withAuthInfo, useLogoutFunction, WithAuthInfoProps } from '@propelauth/react'
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import { AuthProvider } from '@propelauth/react';

const HomepageComponent = withAuthInfo((props: WithAuthInfoProps) => {
    const [userType, setUserType] = useState<string>("");
    const router = useRouter();

    useEffect(() => {
        setUserType(localStorage.getItem("user-type")!);
        if(!props.isLoggedIn) {
            router.push("/")
        }
    }, []);

    const logoutFunction = useLogoutFunction()


    if (props.isLoggedIn) {
        return (
            <AuthProvider authUrl={process.env.NEXT_PUBLIC_AUTH_URL!}>

            <div>
                <p>You are logged in as {props.user.email}. Your type is {userType}</p>\
                <button onClick={() => {logoutFunction(true)}}>Logout</button>
            </div>
            </AuthProvider>
        )
    }
});

export default HomepageComponent;
