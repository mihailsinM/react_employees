import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css';
import { render } from '@testing-library/react';



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'John Smith', salary: 688, increase: false, id: 1 },
                { name: 'Michael Sin', salary: 1500, increase: true, id: 2 },
                { name: 'Alex Fresh', salary: 3000, increase: false, id: 3 },
                { name: 'John Brace', salary: 1000, increase: true, id: 4 },
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);

            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);

            // const neArr = [...before, ...after];

            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    render() {
        return (
            <div className='app'>
                <AppInfo />


                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />

                </div>
                <EmployeesList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                />
                <EmployeesAddForm />
            </div>
        )
    }
}

export default App;