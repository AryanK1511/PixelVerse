
import { withAuthInfo, useLogoutFunction, WithAuthInfoProps } from '@propelauth/react'
import { useEffect } from 'react';
import { useRouter } from "next/navigation";
import { AuthProvider } from '@propelauth/react';

const HomepageComponent = withAuthInfo((props: WithAuthInfoProps) => {

    const router = useRouter();

    useEffect(() => {
        if(!props.isLoggedIn) {
            router.push("/")
        }
    }, []);

    const logoutFunction = useLogoutFunction()


    if (props.isLoggedIn) {
        return (
            <AuthProvider authUrl={process.env.NEXT_PUBLIC_AUTH_URL!}>

            <div>
                <p>You are logged in as {props.user.email}</p>\
                <button onClick={() => {logoutFunction(true)}}>Logout</button>
            </div>
            </AuthProvider>
        )
    }
});

export default HomepageComponent;
