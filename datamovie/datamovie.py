import gramex

file_name = "data/ball_by_ball.csv"
match_id = 336001 # random id pick from dataset

def get_match_data(handler):
    match_df = gramex.cache.open(file_name) 
    match_df = match_df[(match_df['match_id'] == match_id)]
    team1 = match_df[match_df['innings_no'] == 1]
    team2 = match_df[match_df['innings_no'] == 2]
    result = {'team1':team1,'team2':team2}
    return result
