import scrapy
import time
from spider.items import TechItem 
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

chrome_options = Options()
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')
chrome_options.add_argument('--headless')

class Kr36Tech(scrapy.Spider):
    name = 'kr36_tech'
    allowed_domains = ['36kr.com']
    start_urls = ['https://36kr.com/information/technology']

    def parse(self, response):
        driver = webdriver.Chrome(chrome_options=chrome_options)
        driver.get(self.start_urls[0])
        res = driver.execute_script('return window.initialState')
        news_list = res['information']['informationList']
        time_now = int(time.time() * 1000)
        for newsItem in news_list:
            time_pub = int(time.mktime(time.strptime(newsItem['published_at'], '%Y-%m-%d %H:%M:%S'))) * 1000
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