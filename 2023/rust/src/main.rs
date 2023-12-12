#[path = "day-1/index.rs"]
mod day1;
#[path = "day-2/index.rs"]
mod day2;
#[path = "day-3/index.rs"]
mod day3;
#[path = "day-4/index.rs"]
mod day4;
#[path = "day-5/index.rs"]
mod day5;

fn main() {
    println!("##########################################\n");
    println!("Starting 2023 Advent of Code Rust solutions");
    let (day1_part1, day1_part2) = day1::run();
    let (day2_part1, day2_part2) = day2::run();
    let (day3_part1, day3_part2) = day3::run();
    let (day4_part1, day4_part2) = day4::run();
    let (day5_part1, day5_part2) = day5::run();

    println!("------------------------------------------");
    println!("Day 1 | Part1 : {} | Part2 : {}", day1_part1, day1_part2);
    println!("Day 2 | Part1 : {} | Part2 : {}", day2_part1, day2_part2);
    println!("Day 3 | Part1 : {} | Part2 : {}", day3_part1, day3_part2);
    println!("Day 4 | Part1 : {} | Part2 : {}", day4_part1, day4_part2);
    println!("Day 5 | Part1 : {} | Part2 : {}", day5_part1, day5_part2);

    println!("\n##########################################");
}
