use regex::Regex;
use std::fs;

fn read_input() -> String {
    return fs::read_to_string("src/../../inputs/day3.txt")
        .expect("Something went wrong reading the file");
}

fn parse_input(input: String) -> Vec<String> {
    return input.split("\n").map(|x| x.to_string()).collect();
}

fn solve_part_1(input: &Vec<String>) -> i32 {
    let number_map = input.clone();

    let not_number_or_dot_regex = Regex::new(r"\d|\.").unwrap();

    let nums = input
        .iter()
        .enumerate()
        .map(|(x_index, x)| {
            Regex::new(r"\d+")
                .unwrap()
                .find_iter(x)
                .filter(|y| {
                    let search_range: Vec<usize> = if y.start() > 0 && y.end() < x.len() - 1 {
                        ((y.start() - 1)..(y.end() + 1)).collect()
                    } else if y.start() > 0 {
                        ((y.start() - 1)..y.end()).collect()
                    } else if y.end() < x.len() - 1 {
                        (y.start()..(y.end() + 1)).collect()
                    } else {
                        (y.start()..y.end()).collect()
                    };

                    let top_line = if x_index > 0 {
                        Some(search_range.iter().any(|z| {
                            !not_number_or_dot_regex.is_match(
                                &number_map
                                    .get(x_index - 1)
                                    .unwrap()
                                    .chars()
                                    .nth(*z)
                                    .unwrap_or(' ')
                                    .to_string(),
                            )
                        }))
                    } else {
                        None
                    }
                    .unwrap_or(false);

                    let same_line = search_range.iter().any(|z| {
                        !not_number_or_dot_regex.is_match(
                            &number_map
                                .get(x_index)
                                .unwrap()
                                .chars()
                                .nth(*z)
                                .unwrap_or('.')
                                .to_string(),
                        )
                    });

                    let bottom_line = if x_index < number_map.len() - 1 {
                        Some(search_range.iter().any(|z| {
                            !not_number_or_dot_regex.is_match(
                                &number_map
                                    .get(x_index + 1)
                                    .unwrap()
                                    .chars()
                                    .nth(*z)
                                    .unwrap_or('.')
                                    .to_string(),
                            )
                        }))
                    } else {
                        None
                    }
                    .unwrap_or(false);

                    return top_line || same_line || bottom_line;
                })
                .collect::<Vec<_>>()
        })
        .collect::<Vec<_>>();

    return nums
        .iter()
        .flatten()
        .map(|x| x.as_str().parse::<i32>().unwrap())
        .sum::<i32>();
}
fn solve_part_2() -> i32 {
    return 2;
}

pub fn run() -> (i32, i32) {
    let input = read_input();
    let parsed_input = parse_input(input);

    let part_1_result = solve_part_1(&parsed_input);
    let part_2_result = solve_part_2();

    return (part_1_result, part_2_result);
}
