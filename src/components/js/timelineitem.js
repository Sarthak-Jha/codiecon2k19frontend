import imageArr from '@/assets/categoryicon/icons'

export default {
    name: 'timelineitem',
    data () {
        return {
            imageArr: [],
            index: 0
        }
    },
    props: {
        timelinedata: {
            type: Object,
            required: true,
            default: () => []
        }
    },
    computed: {
        alignment () {
            if (this.timelinedata.index % 2 === 0 ) {
                return true
            }
            return false
        }
    },
    created () {
        this.imageArr = imageArr
        this.index = this.timelinedata.index
    }
}
