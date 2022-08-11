import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { Table } from '../../components/Table';
import {
    HomeContainer,
} from './styles';



export const Home = () => {


    return (
        <HomeContainer>
            <Header />
            <Summary />
            <Table />

        </HomeContainer>
    );
}