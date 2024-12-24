import data from '@/shared/db/db.json'
import { IProduct, ProductResponse } from '@/modules/Product'

class Api {
  static async getAllProducts() {
    return new Promise<ProductResponse>((resolve, reject) => {
      const isSuccess = data !== undefined

      setTimeout(() => {
        if (isSuccess) {
          resolve(data)
        } else {
          reject(new Error('Something went wrong!'))
        }
      }, 250)
    })
  }

  static async getProductDetails(id: number) {
    return new Promise<IProduct>((resolve, reject) => {
      const isSuccess = data !== undefined

      if (!isSuccess) {
        reject(new Error('Something went wrong!')) // Oops! Something went wrong!
      }

      setTimeout(() => {
        const products = data.productsData
        const product = products.filter((prod) => prod.id === id)[0]
        if (isSuccess) {
          resolve(product)
        } else {
          reject(new Error('Something went wrong!')) // Oops! Something went wrong!
        }
      }, 250)
    })
  }
}

export default Api
