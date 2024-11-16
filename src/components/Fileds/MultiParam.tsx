import { useState, useEffect } from 'react';
import { useObjectToEdit } from '../../state/objectToEdit';
import Input from './Input';
import Button from '../Ui/Button';

const MultiParam = () => {
  const { objectToEdit, setObjectToEdit } = useObjectToEdit(); 
  const [params, setParams] = useState<{ key: string; value: string }[]>(objectToEdit?.params || []);

  useEffect(() => {
    // Avoid infinite loop by checking if params have changed
    if (JSON.stringify(params) !== JSON.stringify(objectToEdit?.params)) {
      setObjectToEdit({ ...objectToEdit, params });
    }
  }, [params, setObjectToEdit, objectToEdit]);

  const handleAddParam = () => {
    setParams([...params, { key: '', value: '' }]);
  };

  const handleRemoveParam = (index: number) => {
    const updatedParams = params.filter((_, i) => i !== index);
    setParams(updatedParams);
  };

  const handleInputChange = (index: number, field: 'key' | 'value', value: string) => {
    const updatedParams = [...params];
    updatedParams[index][field] = value;
    setParams(updatedParams);
  };

  return (
    <div>
      {params.map((param, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <Input
            name={`key-${index}`}
            placeholder="key"
            type="text"
            onChange={(e: any) => handleInputChange(index, 'key', e.target.value)}
            value={param?.key}
          />
          <Input
            name={`value-${index}`}
            placeholder="value"
            type="text"
            onChange={(e: any) => handleInputChange(index, 'value', e.target.value)}
            value={param?.value}
          />
          <Button
            onClick={() => handleRemoveParam(index)}
            style={{ marginLeft: '10px' }}
          >
            Remove
          </Button>
        </div>
      ))}
      <Button onClick={handleAddParam}>
        Add 
      </Button>
    </div>
  );
};

export default MultiParam;
