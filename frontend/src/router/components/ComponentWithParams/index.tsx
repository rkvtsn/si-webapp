import { useParams } from 'react-router'

export const ComponentWithParams = <TParam extends Record<string, string>>({
    component,
}: {
    component: React.FC<TParam>
}) => {
    const params = useParams()
    const Component = component
    return <Component {...(params as TParam)} />
}
