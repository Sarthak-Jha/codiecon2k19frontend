export default {
    name: 'datePicker',
    props: {
        labelName: {
            type: String,
            default: "From",
            required: true
        }
    },
    data () {
        return {
            date: new Date().toISOString().substr(0, 10),
            menu: false
        }
    }
}