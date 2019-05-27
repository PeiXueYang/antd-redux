import Home from '../components/Home/Home'
import User from '../components/User/User'
import UserList from '../components/UserList/UserList'
import AddUser from '../components/AddUser/AddUser'
import EditUser from '../components/EditUser/EditUser'
import Shop from '../components/Shop/Shop'
import ShopList from '../components/ShopList/ShopList'
import AddShop from '../components/AddShop/AddShop'
import EditShop from '../components/EditShop/EditShop'
const routes = [{
        path: "/",
        component: Home,
        exact: true
    },
    {
        path: "/user",
        component: User,
        routes: [{
                path: "/user/userlist",
                component: UserList,
               
            },
            {
                path: "/user/adduser",
                component: AddUser
            },
            {
                path: "/user/edituser",
                component: EditUser
            },
        ]
    },
    {
        path: "/shop",
        component: Shop,
        routes: [{
                path: "/shop/usershop",
                component: ShopList
            },
            {
                path: "/shop/addshop",
                component: AddShop
            },
            {
                path: "/shop/editshop",
                component: EditShop
            },
        ]
    },
];
export default routes;