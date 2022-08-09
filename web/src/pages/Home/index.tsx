import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import {
    HomeContainer,
} from './styles';

export const Home = () => {

    return (
        <HomeContainer>
            <Header />
            <Summary />

        </HomeContainer>
    );
}