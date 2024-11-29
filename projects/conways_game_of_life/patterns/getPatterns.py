import os
import requests
import json
from tqdm import tqdm  


pattern_files = os.listdir("./patterns/data/rle")
os.makedirs('./patterns/data/json', exist_ok = True)

def run_length_decoding(compressed_seq: str, x: int, y: int) -> list:
    res = [[]]
    index = 0
    number = ""
    for character in compressed_seq:
        if character == '$':
            res[index].extend((x - len(res[index])) * [False])
            res.append([])
            index += 1
            number = ""
            continue

        if character == '!':
            res[index].extend((x - len(res[index])) * [False])

            for _ in range(y - len(res)):
                res.append([False] * x)
            return res
        
        if character.isalpha():
            count = int(number) if number else 1
            alive = character == 'o'
            res[index].extend([alive] * count)

            number = ""
        else:
            number += character


for patternName in tqdm(pattern_files):

    filename: str
    with open(f'./patterns/data/rle/{patternName}', 'r') as f:
        d = {}
        lines = f.readlines()
        d['name'] = lines.pop(0).split(' ', 1)[1].strip()
        filename = ''.join([char if char.isalnum() else '' for char in d["name"]]) + '.json'
        if os.path.exists(f'./patterns/data/json/{filename}'):
            continue
 
        header = next((line for line in lines if line.startswith('x = ')), None)
        if header:
            d['x'] = int(''.join(filter(str.isdigit, header.split('x = ')[1].split(',')[0])))
            d['y'] = int(''.join(filter(str.isdigit, header.split('y = ')[1].split(',')[0])))

            if d['x'] > 5000 or d['y']  > 5000:
                continue
        else:
            continue
        data = ''.join(line for line in lines if not line.startswith('#') and not line.startswith('x = '))

        arr = []
        data = data.replace('\n', '').replace(' ', '')
        if len(data) > 5000 or '.' in data:
            continue
       
        decoded = run_length_decoding(data, d['x'], d['y'])
        d['matrix'] = decoded
        
    with open(f'./patterns/data/json/{filename}', 'w') as json_file:
        json.dump(d, json_file, indent=4)
