import dayjs from "dayjs";

export const CurrentDate = () => {
    var arrDay = [];
    var dayToday = "";
    var date = "";
    var month = "";
    var day = "";
    for (let i = 0; i < 7; i++) {
        day = dayjs().add(i, "day").valueOf();
        switch (dayjs(day).day()) {
            case dayjs().day():
                dayToday = "Hôm nay";
                break;
            case 0:
                dayToday = "Chủ nhật";
                break;
            case 1:
                dayToday = "Thứ hai";
                break;
            case 2:
                dayToday = "Thứ ba";
                break;
            case 3:
                dayToday = "Thứ tư";
                break;
            case 4:
                dayToday = "Thứ năm";
                break;
            case 5:
                dayToday = "Thứ sáu";
                break;
            case 6:
                dayToday = "Thứ bảy";
                break;
        }
        date = `0${dayjs(day).date()}`.slice(-2);
        month = `0${dayjs(day).month()}`.slice(-2);
        arrDay = [
            ...arrDay,
            {
                dayNumber: dayToday + " " + date + "/" + month,
            },
        ];
    }
    return arrDay;
};

export const formatDateTime = (item) => {
    if (item) {
        const defaultDate = dayjs(item).format().split("T")[0];
        const formatDate = dayjs(item).format("DD/MM/YYYY");
        const time = dayjs(item).format("HH:mm");
        return {
            defaultDate: defaultDate,
            formatDate: formatDate,
            getTime: time,
        };
    }
};

export const AddMinute = (item) => {
    if (item.time && item.minute) {
        const getDate = dayjs().toISOString().split("T")[0];
        const time = dayjs(getDate + item.time)
            .add(item.minute + 15, "minute")
            .format("HH:mm");
        return {
            getEndTime: time,
        };
    }
};
export const SubtractMinute = (item) => {
    if (item) {
        const time = dayjs(item).subtract(15, "minute").format("HH:mm");
        return {
            getEndTime: time,
        };
    }
};
