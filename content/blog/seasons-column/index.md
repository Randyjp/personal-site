---
title: Adding a Seasons Column to A Pandas Dataset
author: [RandyPerez]
date: '2019-07-25'
attachments:
  - './seasons.jpg'
shortDescription: "Boost your model's predictive powers."
tags: ['machine learning', 'data science', 'pandas', 'python']
---

A vital skill in every data scientist's toolbox is [Feature Engineering](https://www.kdnuggets.com/2018/12/feature-engineering-explained.html); it consists of creating new features that might have a positive impact on the predictive power of models. Though, if we don't possess enough domain knowledge of the data, this process might feel more like an art than a science.

One feature that I see keep adding to my datasets is a **"Season"** column. Seasons are a great way of capturing the effect of things like weather, holidays, and human patterns through a calendar year. Although, they can be useless if you have other features, like temperature, that already account for that effect.

I found a [great answer](https://stackoverflow.com/questions/16139306/determine-season-given-timestamp-in-python-using-datetime/28686747#28686747) on [StackOverflow](https://stackoverflow.com/) and adapted it to work with Pandas; this little function is always on my utility folder. Here's the code:

```python
import pandas as pd

def get_season(date_time):
    # dummy leap year to include leap days(year-02-29) in our range
    leap_year = 2000
    seasons = [('winter', (date(leap_year, 1, 1), date(leap_year, 3, 20))),
               ('spring', (date(leap_year, 3, 21), date(leap_year, 6, 20))),
               ('summer', (date(leap_year, 6, 21), date(leap_year, 9, 22))),
               ('autumn', (date(leap_year, 9, 23), date(leap_year, 12, 20))),
               ('winter', (date(leap_year, 12, 21), date(leap_year, 12, 31)))]

    if isinstance(date_time, datetime):
        date_time = date_time.date()
    # we don't really care about the actual year so replace it with our dummy leap_year
    date_time = date_time.replace(year=leap_year)
    # return season our date falls in.
    return next(season for season, (start, end) in seasons
                if start <= date_time <= end)


def create_season_column(data_set, date_column):
    # cloning the input dataset.
    local = data_set.copy()
    # The apply method calls a function on each row
    local['Season'] = local[date_column].apply(get_season)
    return local


data = pd.read_csv('path_to_your_data', parse_dates=['date'])
data = create_season_column(all_data, date_column='date')
```
