from pymongo import MongoClient

client = MongoClient('45.63.95.182', 27017)
db = client['data']
newsCollection = db['news']

class TechnewsPipeline(object):
    def process_item(self, item, spider):
        print('enter pipeline')
        newsCollection.insert_one(item)
        return item
