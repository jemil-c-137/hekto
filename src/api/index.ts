import data from '../db/db.json'
import { IAllProductsResponse } from '@/types'

class Api {
  static async getAllProducts() {
    return new Promise<IAllProductsResponse>((resolve, reject) => {
      const isSuccess = data !== undefined

      setTimeout(() => {
        if (isSuccess) {
          const repsonse = {
            productsData: data.productsData
          }
          resolve(data) // Yay! Everything went well!
        } else {
          reject(new Error('Something went wrong!')) // Oops! Something went wrong!
        }
      }, 250)
    })
  }

  static async getProductDetails(id: number) {
    return new Promise((resolve, reject) => {
      const isSuccess = data !== undefined

      setTimeout(() => {
        if (isSuccess) {
          const products = data.productsData
          const product = products.filter((prod) => prod.id === id)
          resolve(product)
        } else {
          reject(new Error('Something went wrong!')) // Oops! Something went wrong!
        }
      }, 250)
    }).then((res) => {
      console.log(res, 'response')
    })
  }
}

export default Api
