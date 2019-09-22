import dynamic from 'next/dynamic'
import Header from '../components/Header';

const DynamicComponentWithNoSSR = dynamic(
    () => import('../components/DynamicComponentWithNoSSR'),
    { ssr: false }
)

const Dashboard = () => {
    return (
        <div>
            <Header />
            <DynamicComponentWithNoSSR />
            <p>HOME PAGE is here!</p>
        </div>
    )
}

export default Dashboard;