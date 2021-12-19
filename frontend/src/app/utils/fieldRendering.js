import TextField from '@mui/material/TextField'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import { baseApiUrl } from '../utils/systemConstans'
import axios from 'axios'

const renderTextField = ({ label, input, meta: { touched, invalid, error }, ...custom }) => (
    <TextField
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
    />
)

const renderFromHelper = ({ touched, error }) => {
    if (!(touched && error)) {
        return
    } else {
        return <FormHelperText>{touched && error}</FormHelperText>
    }
}

const renderSelectField = ({ minWidth, id, name, input, label, meta: { touched, error }, children, ...custom }) => {
    return (
        <FormControl error={touched && error} style={{ width: 390 }}>
            <InputLabel id={id}>{label}</InputLabel>
            <Select
                {...input}
                {...custom}
                inputProps={{
                    name: name,
                    id: id
                }}
            >
                {children}
            </Select>
            {renderFromHelper({ touched, error })}
        </FormControl>
    )
}

const renderSelectOptions = (options, type) => {
    if (options && options.length > 0) {
        return options.map(op => {
            return <MenuItem value={op._id} key={op._id + type}>{op.name}</MenuItem>
        })
    }
}

const promiseOptions = (inputValue, fieldToShow) => {
    return new Promise(resolve => {
        const url = `users?search=${inputValue}`
        axios.get(`${baseApiUrl}/${url}`)
            .then(payload => {
                resolve(payload.data.map(obj => {
                    const option = { value: obj, label: obj[fieldToShow] || `It does not have ${fieldToShow}` }
                    return option
                }))
            })
    })
}

const defaultAsyncSelectOption = [{ value: {}, label: '- Clean selection -' }]


export {
    renderTextField, promiseOptions, defaultAsyncSelectOption, renderSelectField, renderSelectOptions
}