#[path = "day-1/index.rs"]
mod day1;
#[path = "day-2/index.rs"]
mod day2;

fn main() {
    println!("##########################################\n");
    println!("Starting 2023 Advent of Code Rust solutions");
    let (day1_part1, day1_part2) = day1::run();
    let (day2_part1, day2_part2) = day2::run();

    println!("------------------------------------------");
    println!("Day 1 | Part1 : {} | Part2 : {}", day1_part1, day1_part2);
    println!("Day 2 | Part1 : {} | Part2 : {}", day2_part1, day2_part2);

    println!("\n##########################################");
}
