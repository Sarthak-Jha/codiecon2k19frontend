import {mapActions} from 'vuex'

export default {
    name: "CategoryPage",
    data() {
      return  {
          postTypeList1: ['BUY', 'SELL', 'RENT'],
          postTypeList2: ['ACTIVITY', 'SEEKER', 'CONTRIBUTOR', 'OTHER'],
          postTypeList3: ['DISCUSSION', 'OTHER'],
          postTypeList4: ['OTHER'],
          postTypeList: []
      }
    },
    props: {
        category: {
            type: String,
            required: true,
            default: () => []
        }
    },
    methods: {
        ...mapActions('postStore',['selectCategory','setAllPostType']),
        selectedCategory (id) {
            console.log(id)
            this.selectCategory(id)
            if(id.categoryName === 'Accomodation' || id.categoryName === 'Electronics' || id.categoryName === 'HouseHold' || id.categoryName === 'Vehicles') {
                this.postTypeList = this.postTypeList1
            } else if(id.categoryName === 'Activities') {
                this.postTypeList = this.postTypeList2
            } else if(id.categoryName === 'Discussion') {
                this.postTypeList = this.postTypeList3
            } else {
                this.postTypeList = this.postTypeList4
            }
            this.setAllPostType(this.postTypeList)
        }
    }
}