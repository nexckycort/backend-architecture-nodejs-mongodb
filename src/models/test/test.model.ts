import { Collection, ObjectId } from 'mongodb'

import mongoConnection from 'loaders/mongo'

interface ITest {
  test: number
}

interface TestDocument extends ITest {
  _id: ObjectId
}
export default class TestModel {
  private static _instance: TestModel
  private testCollection!: Collection<ITest>
  private constructor() {
    this.setup()
  }

  public static get instance(): TestModel {
    if (TestModel._instance === undefined) {
      TestModel._instance = new TestModel()
    }
    return TestModel._instance
  }

  setup = async (): Promise<void> => {
    const connection = await mongoConnection()
    this.testCollection = connection.collection<ITest>('test')
  }

  create = async (testDocument: ITest): Promise<TestDocument> => {
    const result = await this.testCollection.insertOne(testDocument)
    return result.ops[0]
  }

  deleteOne = async (obj: any): Promise<void> => {
    await this.testCollection.deleteOne(obj)
  }
}
