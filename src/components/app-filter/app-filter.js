import './app-filter.css';

const AppFilter = (props) => {
    const battonsData = [
        { name: 'all', label: 'All employees.' },
        { name: 'rise', label: 'Employees for promotion!' },
        { name: 'moreThen1000', label: 'Salary more than 1000$!' }
    ];

    const buttons = battonsData.map(({ name, label }) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button
                type="button"
                className={`btn ${clazz}`}
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
}

export default AppFilter;