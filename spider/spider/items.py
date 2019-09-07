# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy

class TechItem(scrapy.Item):
    pub_time = scrapy.Field()
    title = scrapy.Field()
    url = scrapy.Field()
    news_desc = scrapy.Field()
    news_content = scrapy.Field()
    platform_source = scrapy.Field()
    news_id = scrapy.Field()
    _id = scrapy.Field()
    media_source = scrapy.Field()
    img_cover = scrapy.Field()
