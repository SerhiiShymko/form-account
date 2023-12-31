import { useState } from 'react';
import { Input, List, ResetButton } from './SearchBar.styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import { fetchOrder } from 'api';

export const SearchBar = ({ allFilter, onChangeFilters, onReset }) => {
  const [selectedData, setSelectedData] = useState(new Date());

  return (
    <List>
      <DatePicker
        selected={selectedData}
        onChange={date => {
          setSelectedData(date);
          onChangeFilters({ selectData: date });
        }}
        dateFormat="dd.MM.yyyy"
        placeholder="Дата отримання"
      />
      <Input
        type="text"
        placeholder="Серійний номер"
        onChange={e =>
          onChangeFilters({ ...allFilter, regNumber: e.target.value })
        }
        value={allFilter.regNumber}
      />
      <Input
        type="text"
        placeholder="ПІБ передав"
        as="select"
        onChange={e =>
          onChangeFilters({ ...allFilter, nameOut: e.target.value })
        }
        value={allFilter.nameOut}
      >
        <option value="all">All</option>
        <option value="Petrov1">Petrov1</option>
        <option value="Petrov2">Petrov2</option>
      </Input>

      <Input
        type="text"
        placeholder="ПІБ отримав"
        onChange={e =>
          onChangeFilters({ ...allFilter, nameIn: e.target.value })
        }
        value={allFilter.nameIn}
      />
      <Input
        type="text"
        placeholder="Акт передачі"
        onChange={e =>
          onChangeFilters({ ...allFilter, aktNumber: e.target.value })
        }
        value={allFilter.aktNumber}
      />
      <Input
        type="text"
        placeholder="Примітка"
        onChange={e => onChangeFilters({ ...allFilter, note: e.target.value })}
        value={allFilter.note}
      />
      <ResetButton onClick={onReset}>Reset filters</ResetButton>
    </List>
  );
};
