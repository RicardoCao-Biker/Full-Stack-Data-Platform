import scrapy
from spider.items import TechItem 
from selenium import webdriver

class Kr36Tech(scrapy.Spider):
    name = 'kr36_tech'
    allowed_domains = ['36kr.com']
    start_urls = ['https://36kr.com/information/technology']

    def parse(self, response):
        driver = webdriver.Chrome()
        driver.get(self.start_urls[0])
        res = driver.execute_script('return window.initialState')
        news_list = res['information']['informationList']
        for newsItem in news_list:
            item = TechItem()
            item['pub_time'] = newsItem['published_at']
            item['title'] = newsItem['title']
            item['news_id'] = newsItem['id']
            item['_id'] = newsItem['id']
            item['url'] = 'https://36kr.com/p/' + str(newsItem['entity_id'])
            item['news_desc'] = newsItem['summary']
            item['img_cover'] = newsItem['web_cover']
            item['platform_source'] = '36Kr'
            item['media_source'] = newsItem['template_info']['template_extra']['author_info']['name']
            driver.get('https://36kr.com/p/' + str(newsItem['entity_id']))
            news_content_page = driver.execute_script('return window.initialState')
            item['news_content'] = news_content_page['articleDetail']['articleDetailData']['data']['content']
            yield item
