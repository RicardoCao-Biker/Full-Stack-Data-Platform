import scrapy
from selenium import webdriver

class Kr36Tech(scrapy.Spider):
    name = 'kr36_tech'
    allowed_domains = ['36kr.com']
    start_urls = ['https://36kr.com/information/technology']

    def parse(self, response):
        item = scrapy.Item()
        driver = webdriver.Chrome()
        driver.get(self.start_urls[0])
        res = driver.execute_script('return window.initialState')
        news_list = res['information']['informationList']
        for newsItem in news_list:
             item['time'] = newsItem['香水']
        print(news_list)
