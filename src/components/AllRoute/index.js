import { useRoutes } from "react-router";
import { routes } from '../../routes/index.js';

export default function AllRoute() {
    const element = useRoutes(routes);

    return (
        <>{element}</>
    )
}