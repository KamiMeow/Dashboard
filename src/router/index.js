import HomePage from '@views/HomePage';
import LoginPage from '@views/LoginPage';
import RegisterPage from '@views/RegisterPage';

const routes = [
	{
		title: "Home",
		route: "/",
		filename: "HomePage",
		isExact: true,
		component: HomePage,
		access: "all",
	},
	{
		title: "Login",
		route: "/login",
		filename: "LoginPage",
		isExact: true,
		component: LoginPage,
		access: "guestOnly",
	},
	{
		title: "Register",
		route: "/register",
		filename: "RegisterPage",
		isExact: true,
		component: RegisterPage,
		access: "guestOnly",
	},
];

export default routes;