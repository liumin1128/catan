import { Field, Form, Formik, FormikProps, FieldProps } from 'formik';
import React from 'react'
import { useStyles } from './styles'

interface Props { 
  data: any,
  setData: any
}

// const MyInput = ({ field, form, meta, ...props }: FieldProps) => {
//   return <input {...field} {...props} />;
// };

const items = [
  // {key: 'Part__Feature', label: ''},
  { key: 'Part__Feature001', label: '外壳' },
  { key: 'Part__Feature002', label: '铭牌' },
  // {key: 'Part__Feature003', label: '铭牌'},
  { key: 'Part__Feature004', label: '上盖' },
  // {key: 'Part__Feature004', label: '上盖'},
  { key: 'Part__Feature006', label: '定位板' },
]

const options = [
  {
    key: '1', value: {
      'material-metalness': 1,
      'material-color': '#ff0000'
    }, label: 'red'
  },
  {
    key: '2', value: {
      'material-metalness': 1,
      'material-color': '#00ff00'
    }, label: 'green'
  },
  {
    key: '3', value: {
      'material-metalness': 1,
      'material-color': '#0000ff'
    }, label: 'blue'
  },
  {
    key: '4', value: {
      'material-metalness': 1,
      'material-color': '#000000'
    }, label: 'black'
  },
]

const MyForm: React.FunctionComponent<Props> = props => {
  const classes = useStyles()

  return <>
    <Formik
      initialValues={{ email: '', color: 'red', firstName: '', lastName: '' }}
      onSubmit={(values, actions) => {
        console.log(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      {(formikProps: FormikProps<any>) => (
        <Form>
          {/* <Field type="email" name="email" placeholder="Email" />

          <Field as="select" name="color">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </Field> */}

          {items.map(i => {
            console.log("formikProps")
            console.log(formikProps)
            return (<Field key={i.key} name={i.key}>

              {({ field, form, }: FieldProps) => (
                <div>
              <div>{i.label}</div>

                  <div className={classes.items}>
                    {options.map(option => {
                      return <div key={option.key} className={classes.item} style={{ backgroundColor: option.label }} onClick={() => {
                        form.setFieldValue(field.name, "xxx")
                        const newData = {
                          ...props.data,
                          [i.key]: option.value
                        }
                        props.setData(newData)
                      }}>{option.label}</div>
                    })}
                  </div>

                  {/* <input type="text" placeholder="Email" {...field} /> */}

                  {/* {meta.touched && meta.error && (
                  <div className="error">{meta.error}</div>
                )} */}
                </div>
              )}
            </Field>)
          })}



          {/* <Field name="lastName" placeholder="Doe" component={MyInput} />
          <button type="submit">Submit</button> */}
        </Form>
      )}
    </Formik>
  </>
};

export default MyForm