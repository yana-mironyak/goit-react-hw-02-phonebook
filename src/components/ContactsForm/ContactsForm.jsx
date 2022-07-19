import { Form, Field, ErrorMessage } from 'formik';
import css from '../ContactsForm/ContactsForm.module.css';

const ContactsForm = () => {
    return <Form autoComplete='off'>
        <label className={css.contact} htmlFor='name'>
            Name
            <Field className={css.contactInput}type='text' name='name'/>
            <ErrorMessage className={css.contactError} name='name' component='div'/>
        </label>
        <label className={css.contact} htmlFor='number'>
            Number
            <Field className={css.contactInput}type="tel" name="number"/>
            <ErrorMessage className={css.contactError} name='number' component='div'/>
        </label>
        <button type='submit' className={css.contactButton}>Add contact</button>
    </Form>
}

export default ContactsForm;

