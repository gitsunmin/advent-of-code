#[path = "../utils/index.rs"]
mod utils;

use regex::Regex;
use std::collections::HashMap;

fn parse_input(
    input: String,
) -> (
    Vec<usize>,
    HashMap<usize, usize>,
    HashMap<usize, usize>,
    HashMap<usize, usize>,
    HashMap<usize, usize>,
    HashMap<usize, usize>,
    HashMap<usize, usize>,
    HashMap<usize, usize>,
) {
    let lines = input
        .split("\n\n")
        .map(|x| x.to_string())
        .collect::<Vec<String>>();

    fn get_map(lines: &Vec<String>, name: String) -> HashMap<usize, usize> {
        println!("name: {:?}", name);
        return lines
            .iter()
            .filter(|x| x.contains(format!("{}", name).as_str()))
            .flat_map(|x| {
                x.split("\n")
                    .filter(|x| !x.contains(format!("{}", name).as_str()))
                    .map(|x| {
                        x.split(" ")
                            .map(|x| x.to_string().parse::<usize>().unwrap())
                            .collect::<Vec<usize>>()
                    })
                    .collect::<Vec<Vec<usize>>>()
            })
            .fold(HashMap::new(), |mut acc, x| {
                for i in 0..x[2] {
                    let key = x[1] + i;
                    let value = x[0] + i;
                    acc.insert(key, value);
                }
                acc
            });
    }
    let seeds = lines
        .iter()
        .filter(|x| x.contains("seeds"))
        .flat_map(|x| {
            Regex::new(r"\d+")
                .unwrap()
                .find_iter(x)
                .map(|x| x.as_str().parse::<usize>().unwrap())
                .collect::<Vec<usize>>()
        })
        .collect::<Vec<usize>>();

    return (
        seeds,
        get_map(&lines, "seed-to-soil".to_string()),
        get_map(&lines, "soil-to-fertilizer".to_string()),
        get_map(&lines, "fertilizer-to-water".to_string()),
        get_map(&lines, "water-to-light".to_string()),
        get_map(&lines, "light-to-temperature".to_string()),
        get_map(&lines, "temperature-to-humidity".to_string()),
        get_map(&lines, "humidity-to-location".to_string()),
    );
}

fn solve_part_1(
    input: (
        Vec<usize>,
        HashMap<usize, usize>,
        HashMap<usize, usize>,
        HashMap<usize, usize>,
        HashMap<usize, usize>,
        HashMap<usize, usize>,
        HashMap<usize, usize>,
        HashMap<usize, usize>,
    ),
) -> usize {
    let (
        seeds,
        seed_to_soil,
        soil_to_fertilizer,
        fertilizer_to_water,
        water_to_light,
        light_to_temperature,
        temperature_to_humidity,
        humidity_to_location,
    ) = input;

    let result = seeds
        .iter()
        .map(|x| {
            let soil = seed_to_soil.get(x).unwrap_or(x);
            let fertilizer = soil_to_fertilizer.get(soil).unwrap_or(soil);
            let water = fertilizer_to_water.get(fertilizer).unwrap_or(fertilizer);
            let light = water_to_light.get(water).unwrap_or(water);
            let temperature = light_to_temperature.get(light).unwrap_or(light);
            let humidity = temperature_to_humidity
                .get(temperature)
                .unwrap_or(temperature);
            let location = humidity_to_location.get(humidity).unwrap_or(humidity);
            return location;
        })
        .collect::<Vec<&usize>>();

    return result.iter().min().unwrap().to_owned().to_owned();
}

// fn solve_part_2(input: Vec<Vec<Vec<i32>>>) -> i32 {}

pub fn run() -> (usize, usize) {
    let input = utils::read_input(5);

    let parsed_input = parse_input(input);

    let part_1_result = solve_part_1(parsed_input.clone());
    return (part_1_result, 2);
}
